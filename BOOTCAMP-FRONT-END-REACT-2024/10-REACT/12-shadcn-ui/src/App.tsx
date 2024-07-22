import { Switch } from "./components/ui/switch"

function App () {   
    return (
        <div className='center-vertical'>
            <h1>ShadCN UI</h1>

            <Switch className="border-black"/>

            <button className="btn btn-primary">Click</button>
            

            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>
            </div>
    );
}





export default App;
