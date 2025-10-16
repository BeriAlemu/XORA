function FaqItem ({item, index}){
    return(
        <div className="relative z-2 mb-16">
            <div className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
             onClick={() => {}}>
                <div className="flex-1">
                    <div>
                        {index < 10 ? "0": ""}{index}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FaqItem;