import comingsoon from '../src/assets/comingsoon.png';
function Homepageslider() {
    return (
        <>
            <div className="row m-0 p-0 d-none d-md-flex" style={{ 'backgroundColor': '#242424' }}>
                <div className="col-4 d-flex p-5">
                    <img src={comingsoon} width='100%' alt="" />
                </div>
                <div className="col-8 d-flex align-items-center">
                    <p className="text-white">
                        Ye ZVR------
                        Pen down your originals...
                        Paint your hopes.
                        Bring it to the imagination,
                        We're here folks.

                        ZVR coming soon...

                    </p>
                </div>
            </div>




            <div className="row m-0 py-4 d-md-none d-flex" style={{ 'backgroundColor': '#242424' }}>
                <div className="col-6 d-flex p-2">
                    <img src={comingsoon} width='100%' alt="" />
                </div>
                <div className="col-6 d-flex align-items-center">
                    <p className="text-white">
                        Ye ZVR------
                        Pen down your originals...
                        Paint your hopes.
                        Bring it to the imagination,
                        We're here folks.

                        ZVR coming soon...

                    </p>
                </div>
            </div>
        </>
    );
}

export default Homepageslider;