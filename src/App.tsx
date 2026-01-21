import './App.css'
import TiltCard from './TiltCard'

export default function App() {
    return (
        <main className="container">
            <section className="section about">
                <h1 className="name">Pietro Gregorio</h1>

                <div className="content">
                    <div className="inner-grid">
                        <div className="left">
                            <div className="block">
                                <h3>Biography</h3>
                                <p>
                                    Software engineer
                                </p>
                            </div>

                            <div className="block">
                                <h3>Skills</h3>
                                <p>
                                    Backend • Java • Spring Boot
                                </p>
                            </div>
                        </div>

                        <div className="center">
                            <TiltCard />
                        </div>

                        <div className="right">
                            <div className="stat">
                                <span className="value">X</span>
                                <span className="label">Highlight</span>
                            </div>

                            <div className="stat">
                                <span className="value">Y</span>
                                <span className="label">Highlight</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section projects">
                <h2>Highlights</h2>
                <p>My highlights.</p>
            </section>

            <section className="section contact">
                <h2>Contact</h2>
                <p>email • github • linkedin</p>
            </section>
        </main>
    )
}
