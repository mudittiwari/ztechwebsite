import comingsoon from '../src/assets/comingsoon.png';
function Homepageslider() {
    return (
        <>
            <div className="row m-0 p-0 d-none d-md-block" style={{ 'backgroundColor': '#242424' }}>
                <div className="col-4 d-flex p-5">
                    <img src={comingsoon} width='100%' alt="" />
                </div>
                <div className="col-8 d-flex align-items-center">
                    <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, reiciendis! Velit dolor, tempore ab vero, molestias, tenetur magni cupiditate neque debitis totam provident. Necessitatibus molestiae delectus tempora assumenda ducimus optio hic architecto voluptas nulla vel, laudantium omnis dolores a libero nihil nisi fuga impedit aut harum tenetur possimus dolor. Repudiandae recusandae a harum laborum voluptas deleniti distinctio repellendus iure, modi rerum fugiat dicta nesciunt aliquid asperiores nihil! Accusamus, assumenda. Laudantium, vero harum fugiat ab excepturi minus sint cupiditate dolore! Voluptates incidunt quos aspernatur suscipit provident quae minima, repellendus ipsam aperiam laboriosam minus dolorem ullam consequatur! Ut ratione aliquam mollitia libero.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, nec in ornare ante. Vulputate porttitor sit mi lectus. Enim sem.
                    </p>
                </div>
            </div>




            <div className="row m-0 py-4 d-md-none d-flex" style={{ 'backgroundColor': '#242424' }}>
                <div className="col-6 d-flex p-2">
                    <img src={comingsoon} width='100%' alt="" />
                </div>
                <div className="col-6 d-flex align-items-center">
                    <p className="text-white">
                        Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, nec in ornare ante. Vulputate porttitor sit mi lectus. Enim sem.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Homepageslider;