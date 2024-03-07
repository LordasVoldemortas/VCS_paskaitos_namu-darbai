import Icon from "../icon/Icon"

const Search = () => {
    return(
        <div className="rounded-pill border border-2 px-2">
            <Icon />
            <input type="search" placeholder="Search" className="border border-0"/>
        </div>
    )
}

export default Search