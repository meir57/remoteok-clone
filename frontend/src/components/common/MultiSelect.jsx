import { useEffect, useState } from "react";
import Keyword from "../common/Keyword";

export default function MultiSelect(props) {
    const [keywordItems, setKeywordItems] = useState([]);
    const [selectItems, setSelectItems] = useState(props.options);
    let firstSelectItem = null;

    useEffect(() => {
        setSelectItems(props.options.filter(item => !keywordItems.includes(item)));
        if (! firstSelectItem) {
            firstSelectItem = document.querySelector(`.${props.id}-current-item`);
        }
        let pickedKeywords = document.querySelectorAll(`.${props.id}-picked`);
        for (let pickedKeyword of pickedKeywords) {
            pickedKeyword.classList.remove(`${props.id}-picked`);
            pickedKeyword.classList.remove('!bg-[#e8e8e8]');
        }
    }, [keywordItems]);

    useEffect(() => {    
        document.querySelector(`#${props.id}`).onkeydown = (evt) => {
            if (evt.key === "Enter") {
                if (! firstSelectItem) {
                    firstSelectItem = document.querySelector(`.${props.id}-current-item`);
                }
                
                if (firstSelectItem) {
                    firstSelectItem.click();
                }
            }

            if (evt.key == "Backspace" && evt.target.value == "") {
                if (document.querySelectorAll(`.${props.id}-picked`).length) {
                    setKeywordItems([]);
                } else {
                    setKeywordItems(keywordItems.slice(0, -1));
                }
            }

            if (evt.code == "KeyA" && (evt.meta || evt.ctrlKey)) {
                if (evt.target.value == "" && keywordItems.length) {
                    let pickedKeywords = document.querySelectorAll(`.${props.id}-keyword`);
                    for (let pickedKeyword of pickedKeywords) {
                        pickedKeyword.classList.add('!bg-[#e8e8e8]');
                        pickedKeyword.classList.add(`${props.id}-picked`);
                    }
                }
            }

            if (evt.code == "ArrowUp" || evt.code == "ArrowDown") {
                if (selectItems.length == 0) {
                    return;
                }

                firstSelectItem = document.querySelector(`.${props.id}-current-item`);

                if (! firstSelectItem) {
                    firstSelectItem = document.querySelector(`.${props.id}-select-item`);
                    firstSelectItem.classList.add(`${props.id}-current-item`);
                    firstSelectItem.classList.add('bg-[#f4f5f4]');
                    return;
                }

                if (firstSelectItem.nextElementSibling) {
                    if (firstSelectItem.nextElementSibling.classList.contains(`${props.id}-no-select`)) {
                        return;
                    }
                }

                firstSelectItem.classList.remove(`${props.id}-current-item`);
                firstSelectItem.classList.remove('bg-[#f4f5f4]');

                if (evt.code == "ArrowDown" && firstSelectItem.nextElementSibling) {
                    firstSelectItem = firstSelectItem.nextElementSibling;
                }

                if (evt.code == "ArrowUp" && firstSelectItem.previousElementSibling) {
                    firstSelectItem = firstSelectItem.previousElementSibling;
                }

                firstSelectItem.classList.add(`${props.id}-current-item`);
                firstSelectItem.classList.add('bg-[#f4f5f4]');
                firstSelectItem.scrollIntoView({block: "nearest", inline: "nearest"});
            }
        }

        document.querySelector(`#${props.id}`).onkeyup = (evt) => {
            if (evt.target.value.length) {
                if (! props.options.includes(evt.target.value) && props.creatable) {
                    setSelectItems([`Add <b>${evt.target.value}</b>...`, ...props.options.filter(item => !keywordItems.includes(item) && item.toLowerCase().includes(evt.target.value.toLowerCase()))]);    
                    return;
                }
                setSelectItems(props.options.filter(item => !keywordItems.includes(item) && item.toLowerCase().includes(evt.target.value.toLowerCase())));
            } else {
                setSelectItems(props.options.filter(item => !keywordItems.includes(item)));
            }
        }

        document.querySelector(`#${props.id}`).onblur = (evt) => {
            firstSelectItem = null;
            if (document.querySelector(`.${props.id}-select-container`).querySelector(`.${props.id}-current-item`)) {
                document.querySelector(`.${props.id}-current-item`).classList.remove('bg-[#f4f5f4]');
                document.querySelector(`.${props.id}-current-item`).classList.remove(`.${props.id}-current-item`);
            }
            firstSelectItem = document.querySelector(`.${props.id}-select-item`);
            if (firstSelectItem) {
                firstSelectItem.classList.add('bg-[#f4f5f4]');
                firstSelectItem.classList.add(`${props.id}-current-item`);
                document.querySelector(`.${props.id}-select-container`).classList.add('!block');
                firstSelectItem.scrollIntoView({block: "nearest", inline: "nearest" });
                document.querySelector(`.${props.id}-select-container`).classList.remove('!block');
            }

            let pickedKeywords = document.querySelectorAll(`.${props.id}-picked`);
            for (let pickedKeyword of pickedKeywords) {
                pickedKeyword.classList.remove(`.${props.id}-picked`);
                pickedKeyword.classList.remove('!bg-[#e8e8e8]');
            }
        }

        document.querySelector(`#${props.id}`).onclick = () => {
            let pickedKeywords = document.querySelectorAll(`.${props.id}-picked`);
            for (let pickedKeyword of pickedKeywords) {
                pickedKeyword.classList.remove(`.${props.id}-picked`);
                pickedKeyword.classList.remove('!bg-[#e8e8e8]');
            }
        }
    });

    const removeItem = (evt) => {
        let index = keywordItems.indexOf(evt.target.innerHTML);

        if (evt.target.innerHTML == '×') {
            index = keywordItems.indexOf(evt.target.parentElement.querySelector('.inline-flex').innerHTML);
        }

        if (index === -1) {
            return;
        }
        
        setKeywordItems(keywordItems.filter(item => item != keywordItems[index]));
    }

    const pickItem = (evt) => {
        if (evt.target.innerHTML.startsWith('Add')) {
            setKeywordItems([...keywordItems, document.querySelector(`#${props.id}`).value]);
            setSelectItems(selectItems.filter(item => item != document.querySelector(`#${props.id}`).value));
            document.querySelector(`#${props.id}`).value = "";
            return;
        }
        setKeywordItems([...keywordItems, evt.target.innerHTML]);
        setSelectItems(selectItems.filter(item => item != evt.target.innerHTML));
    }

    return (
        <div className="group relative">
            <div className={(keywordItems.length > 0 ? "pt-2 ps-2" : "" ) + " flex flex-wrap shadow-[0_0_0_1px_#ddd] bg-[#fbfaf8] rounded-[5px] focus-within:shadow-[0_0_0_4px_rgba(255,75,66,0.5)]"}>
                { keywordItems.map((item, key) => <SelectedKeyword key={key} text={item} onClick={removeItem} parent={props.id} />) }
                {/* { keywordItems.length == 400 && <div className="px-2 pt-2 inline-flex flex-wrap">
                    { keywordItems.map((item, key) => <SelectedKeyword key={key} text={item} onMouseDown={removeItem} />) }
                </div> } */}
                <input
                    id={props.id}
                    placeholder={props.placeholder}
                    className={(keywordItems.length > 0 ? "mb-2" : "") + " inline-flex grow p-[5px] text-[16px] outline-none border-none bg-transparent"}
                />
            </div>
            <div
                className={props.id+"-select-container hidden w-[100%] z-50 absolute group-focus-within:block bg-bg-color border-[1px] border-solid border-[#ddd] rounded-[5px] max-h-[200px] overflow-y-auto"}
            >
                {
                    (
                        props.creatable ? (
                            (selectItems.length == 1 && selectItems[0].startsWith('Add'))
                                ? 
                            ([...selectItems, "No results found"].map(
                                (keyword, key) => {
                                    return (
                                        keyword.startsWith('Add')
                                        ?
                                        <MultiSelectItem 
                                            key={key}
                                            text={keyword}
                                            onMouseDown={pickItem} 
                                            parent={props.id}
                                            className={key==0 ? props.id+"-current-item bg-[#f4f5f4]" : ""}
                                        />
                                        :
                                        <MultiSelectItem
                                            key={key}
                                            text={keyword}
                                            parent={props.id}
                                            className={props.id+"-no-select !cursor-default hover:!bg-transparent"}
                                        />
                                    )
                                }))
                                :
                            selectItems.map((keyword, key) => 
                                <MultiSelectItem 
                                    key={key}
                                    text={keyword}
                                    onMouseDown={pickItem} 
                                    parent={props.id}
                                    className={key==0 ? props.id+"-current-item bg-[#f4f5f4]" : ""}
                                />
                            )
                        ) : selectItems.length ? selectItems.map((keyword, key) => 
                            <MultiSelectItem 
                                key={key}
                                text={keyword}
                                onMouseDown={pickItem} 
                                parent={props.id}
                                className={key==0 ? props.id+"-current-item bg-[#f4f5f4]" : ""}
                            />
                        ) : (
                            <MultiSelectItem
                                text="No results found"
                                className={props.id+"-no-select !cursor-default hover:!bg-transparent"}
                            />
                        )
                    )
                }
            </div>
        </div>
    );
}

function MultiSelectItem(props) {
    return (
        <div
            onMouseMove={() => {
                if (document.querySelector(`.${props.parent}-select-container`).querySelector(`.${props.parent}-current-item`)) {
                    document.querySelector(`.${props.parent}-current-item`).classList.remove('bg-[#f4f5f4]');
                    document.querySelector(`.${props.parent}-current-item`).classList.remove(`${props.parent}-current-item`);
                }
            }}
            onClick={props.onMouseDown}
            onMouseDown={props.onMouseDown}
            className={props.className + ` ${props.parent+"-select-item"}`+" p-[5px] text-[16px] cursor-cell hover:bg-[#f4f5f4]"}
            dangerouslySetInnerHTML={{__html: props.text}}
        >
        </div>
    );
}

function SelectedKeyword(props) {
    return <Keyword selected
        text={props.text}
        onClick={props.onClick}
        className={` ${props.parent+"-keyword"} me-2 mb-2 flex-none py-[5px] px-[8px] border-[1px] border-solid border-[#ddd] rounded-[32px] text-[16px] cursor-zoom-out bg-white`} 
    />
}