import { useEffect, useState } from "react";
import Keyword from "../common/Keyword";

export default function MultiSelect(props) {
    const [keywordItems, setKeywordItems] = useState([]);
    const [selectItems, setSelectItems] = useState(props.options);

    const removeItem = (evt) => {
        let index = keywordItems.indexOf(evt.target.innerHTML);

        if (evt.target.innerHTML == '×'){
            index = keywordItems.indexOf(evt.target.parentElement.querySelector('.inline-flex').innerHTML);
        }

        if (index === -1) {
            return;
        }
        
        setKeywordItems(keywordItems.filter(item => item != keywordItems[index]));
    }

    useEffect(() => {
        setSelectItems(props.options.filter(item => !keywordItems.includes(item)));
    }, [keywordItems]);

    const pickItem = (evt) => {
        setKeywordItems([...keywordItems, evt.target.innerHTML]);
        setSelectItems(selectItems.filter(item => item != evt.target.innerHTML));
    }

    return (
        <div className="group relative">
            <div className={(keywordItems.length > 0 ? "pt-2 ps-2" : "" ) + " flex flex-wrap shadow-[0_0_0_1px_#ddd] bg-[#fbfaf8] rounded-[5px] focus-within:shadow-[0_0_0_4px_rgba(255,75,66,0.5)]"}>
                { keywordItems.map((item, key) => <SelectedKeyword key={key} text={item} onMouseDown={removeItem} />) }
                { keywordItems.length == 400 && <div className="px-2 pt-2 inline-flex flex-wrap">
                    { keywordItems.map((item, key) => <SelectedKeyword key={key} text={item} onMouseDown={removeItem} />) }
                </div> }
                <input
                    id={props.id}
                    placeholder="Type a tag or keyword to search and add it"
                    className={(keywordItems.length > 0 ? "mb-2" : "") + " inline-flex grow p-[5px] text-[16px] outline-none border-none bg-transparent"}
                />
            </div>
            <div className="hidden w-[100%] absolute group-focus-within:block bg-bg-color border-[1px] border-solid border-[#ddd] rounded-[5px] h-[200px] overflow-y-auto">
                {
                    (selectItems.map((keyword, key) => <MultiSelectItem key={key} text={keyword} onMouseDown={pickItem} />))
                }
            </div>
        </div>
    );
}

function MultiSelectItem(props) {
    return (
        <div 
            onMouseDown={props.onMouseDown}
            className={props.className + " p-[5px] text-[16px] cursor-cell hover:bg-[#f4f5f4]"}>
            {props.text}
        </div>
    );
}

function SelectedKeyword(props) {
    return <Keyword selected
        text={props.text}
        onMouseDown={props.onMouseDown}
        className=" me-2 mb-2 flex-none py-[5px] px-[8px] border-[1px] border-solid border-[#ddd] rounded-[32px] text-[16px] cursor-zoom-out bg-white" 
    />
}