import { useRef, useState, useEffect, useCallback, useMemo } from 'react'
import octocard from './assets/octocard.svg'
import './TiltCard.css'

interface TiltState {
    rotateX: number
    rotateY: number
    glareX: number
    glareY: number
    intensity: number
    angle: number
}

interface Star {
    x: number
    y: number
    size: number
}

// Seeded random for consistent star positions
function seededRandom(seed: number) {
    const x = Math.sin(seed) * 10000
    return x - Math.floor(x)
}

// Generate random stars across the entire SVG
function generateStars(count: number, seed: number = 42): Star[] {
    const stars: Star[] = []
    const svgWidth = 204
    const svgHeight = 235
    
    for (let i = 0; i < count; i++) {
        const r1 = seededRandom(seed + i * 3)
        const r2 = seededRandom(seed + i * 3 + 1)
        const r3 = seededRandom(seed + i * 3 + 2)
        
        stars.push({
            x: 8 + r1 * (svgWidth - 16),
            y: 8 + r2 * (svgHeight - 16),
            size: 3 + r3 * 5,
        })
    }
    
    return stars
}

export default function TiltCard() {
    const cardRef = useRef<HTMLDivElement>(null)
    const [tilt, setTilt] = useState<TiltState>({
        rotateX: 0,
        rotateY: 0,
        glareX: 50,
        glareY: 50,
        intensity: 0,
        angle: 0,
    })
    
    const stars = useMemo(() => generateStars(60), [])

    const updateTilt = useCallback((clientX: number, clientY: number) => {
        if (!cardRef.current) return

        const rect = cardRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const deltaX = clientX - centerX
        const deltaY = clientY - centerY

        const maxTilt = 20
        const maxDistance = Math.max(window.innerWidth, window.innerHeight) / 2

        const rotateY = (deltaX / maxDistance) * maxTilt
        const rotateX = -(deltaY / maxDistance) * maxTilt

        const intensity = Math.min(1, Math.sqrt(rotateX ** 2 + rotateY ** 2) / maxTilt)
        
        // Calculate angle for foil sweep effect
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)

        const glareX = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
        const glareY = Math.max(0, Math.min(100, ((clientY - rect.top) / rect.height) * 100))

        setTilt({ rotateX, rotateY, glareX, glareY, intensity, angle })
    }, [])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            updateTilt(e.clientX, e.clientY)
        }

        const handleMouseLeave = () => {
            setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50, intensity: 0, angle: 0 })
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.documentElement.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [updateTilt])

    useEffect(() => {
        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                const touch = e.touches[0]
                updateTilt(touch.clientX, touch.clientY)
            }
        }

        const handleTouchEnd = () => {
            setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50, intensity: 0, angle: 0 })
        }

        document.addEventListener('touchmove', handleTouchMove, { passive: true })
        document.addEventListener('touchend', handleTouchEnd)

        return () => {
            document.removeEventListener('touchmove', handleTouchMove)
            document.removeEventListener('touchend', handleTouchEnd)
        }
    }, [updateTilt])

    // Calculate star glow based on foil sweep pattern
    const getStarGlow = (starX: number, starY: number) => {
        // Normalize star position to 0-100
        const normalizedX = (starX / 204) * 100
        const normalizedY = (starY / 235) * 100
        
        // Distance from glare center
        const dx = normalizedX - tilt.glareX
        const dy = normalizedY - tilt.glareY
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        // Create a sweeping band of light (like foil)
        // Stars within a certain distance range glow brightest
        const bandCenter = 30 // Distance from glare where the band is brightest
        const bandWidth = 40  // How wide the glowing band is
        
        const distanceFromBand = Math.abs(distance - bandCenter)
        const bandGlow = Math.max(0, 1 - distanceFromBand / bandWidth)
        
        // Also add direct proximity glow for stars very close to glare
        const proximityGlow = Math.max(0, 1 - distance / 50)
        
        // Combine both effects
        const combinedGlow = Math.max(bandGlow, proximityGlow) * tilt.intensity
        
        return combinedGlow
    }

    // Dynamic iridescent color that changes with tilt angle
    const getIridescentColor = (x: number, y: number, index: number, glow: number) => {
        // Base hue influenced by tilt angle (like foil reflecting light)
        const angleInfluence = tilt.angle * 2
        
        // Position adds variation
        const positionHue = (x * 0.5 + y * 0.3) % 360
        
        // Tilt rotation adds color shift
        const tiltHue = tilt.rotateY * 12 + tilt.rotateX * 8
        
        // Star index for variety
        const starOffset = index * 20
        
        const hue = (angleInfluence + positionHue + tiltHue + starOffset + 720) % 360
        
        // Higher glow = more saturated and brighter
        const saturation = 70 + glow * 30
        const lightness = 55 + glow * 30
        
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`
    }

    return (
        <div className="tilt-card-wrapper">
            <div
                ref={cardRef}
                className="tilt-card"
                style={{
                    transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                }}
            >
                {/* The SVG IS the card */}
                <img src={octocard} alt="Octocard" className="tilt-card-svg" />

                {/* Iridescent stars with foil-like sweep glow */}
                <svg 
                    className="tilt-card-stars" 
                    viewBox="0 0 204 235"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <defs>
                        <filter id="iridescentGlow" x="-200%" y="-200%" width="500%" height="500%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    
                    {stars.map((star, i) => {
                        const glow = getStarGlow(star.x, star.y)
                        const iridescentColor = getIridescentColor(star.x, star.y, i, glow)
                        
                        return (
                            <g
                                key={i}
                                style={{
                                    opacity: glow > 0.05 ? 0.3 + glow * 0.7 : 0,
                                    filter: glow > 0.2 ? 'url(#iridescentGlow)' : 'none',
                                    transition: 'opacity 0.08s ease',
                                }}
                            >
                                <path
                                    d={`M ${star.x} ${star.y - star.size}
                                        Q ${star.x + star.size * 0.1} ${star.y - star.size * 0.1} ${star.x + star.size} ${star.y}
                                        Q ${star.x + star.size * 0.1} ${star.y + star.size * 0.1} ${star.x} ${star.y + star.size}
                                        Q ${star.x - star.size * 0.1} ${star.y + star.size * 0.1} ${star.x - star.size} ${star.y}
                                        Q ${star.x - star.size * 0.1} ${star.y - star.size * 0.1} ${star.x} ${star.y - star.size}
                                        Z`}
                                    fill={iridescentColor}
                                />
                            </g>
                        )
                    })}
                </svg>
            </div>
        </div>
    )
}
