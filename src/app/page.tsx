import Image from "next/image";

export default function Home() {
    return (
        <main className="content">
            <div className="headline">
                <p>We trade in peace of mind.</p>
                <button className="cta">Send For Us</button>
            </div>
            <div className="sections">
                <div className="section section1">
                    <div className="section-content">
                        <div className="section-content-heading">
                            <p>IT?</p>
                            <p>is the future.</p>
                        </div>
                        <div className="section-content-text">
                            <p>Network cameras and Security locks.</p>
                            <p> IoT: build, install, connect.</p>
                        </div>
                        <a href="/it">Yes</a>
                    </div>
                    {/* <img src="assets/images/IT.png" alt="A woman checking up on servers."> */}
                </div>
                <div className="section section2">
                    {/* <img src="assets/images/Solar.png" alt="A man installing solar panels on the roof of a house."> */}
                    <div className="section-content">
                        <div className="section-content-heading">
                            <p>Solar?</p>
                            <p> is our power.</p>
                        </div>
                        <div className="section-content-text">
                            <p>Supply and installation of</p>
                            <p>Solar panels, invertors, and batteries.</p>
                        </div>
                        <a href="/it">Yes</a>
                    </div>
                </div>
            </div>
        </main>
    );
}
