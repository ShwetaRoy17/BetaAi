import {useRouteError} from "react-router-dom"

export default function ErrorPage(){
    const error = useRouteError();
    console.log(error);
    return(
        <>
        
        <div className="error-page  p-[10px]  h-screen w-full flex justify-center items-center">
        <div>
            <h1 className="font-bold font-sans text-7xl mx-auto my-auto text-center">Oops!!!</h1>
            <p className="font-semibold text-gray-700 my-[1rem] text-center">This Page doesn't exists on this website..</p>
            <p className="text-center">
                <i>
                    Try another url...😇
                </i>
            </p>
            </div>
        </div>
        </>
    )
}

