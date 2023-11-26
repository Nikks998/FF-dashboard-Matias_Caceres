import { ContentRowItem } from "./ContentIRowItem"

export const ContentRowMovies = () => {

    const items = [
        {
        id: crypto.randomUUID(),
        color: "primary",
        title: "Movies in Data Base",
        value: 21,
        icon : "fa-film"
    },
        {
        id: crypto.randomUUID(),
        color: "success",
        title: "Total awards",
        value: 79,
        icon : "fa-award"
    },
        {
        id: crypto.randomUUID(),
        color: "warning",
        title: "Actors quantity",
        value: 49,
        icon : "fa-user"
    }
]
    return (
        <div className="row">
                {
                    items.map(({id, title, color, value, icon}) => 
                        <ContentRowItem  key={id} title = {title} color = {color} value = {value} icon = {icon}/>)
                }
            </div>
    )
}