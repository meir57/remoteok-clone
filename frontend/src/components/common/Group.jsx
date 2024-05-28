export default function Group(props) {
    return (
        <div className="relative m-[30px] mt-[10px] flex flex-col justify-center items-center">
            <div className="text-[12px] uppercase font-bold text-center relative top-[10px] w-[100px] justify-center bg-white px-1 border-solid border-l-[1px] border-r-[1px] border-t-[1px] border-[#ddd] rounded-t-[7px]">
                {props.title}
            </div>
            <div className="p-[20px] w-[100%] bg-white rounded-[8px] border-solid border-[1px] border-[#ddd]">
                {props.children}
            </div>
        </div>
    );
}