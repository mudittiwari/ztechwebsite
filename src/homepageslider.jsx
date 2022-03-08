import coming_soonone from '../src/assets/coming_soonone.jpg';
import coming_soontwo from '../src/assets/coming_soontwo.png';
function Homepageslider(props) {
    console.log(props.name)
    

    return (
        <>
            <div className="row m-0 p-0 d-none d-md-flex" style={{ 'backgroundColor': '#242424' }}>
                <div className="col-4 d-flex p-5">
                
                    <img src={props.name} width='100%' alt="" />
                </div>
                <div className="col-8 d-flex align-items-center">
                    <p className="text-white">
                                {props.content}

                    </p>
                </div>
            </div>





            <div className="row m-0 py-4 d-md-none d-flex" style={{ 'backgroundColor': '#242424' }}>
                <div className="col-6 d-flex p-2">
                    <img src={coming_soonone} width='100%' alt="" />
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