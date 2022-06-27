

export default function Header({dateBuilder}){
    return(
        <div>
            <div className="location"> Denver</div>
            <div className="date">{dateBuilder(new Date)}</div>
        </div>
    )
}