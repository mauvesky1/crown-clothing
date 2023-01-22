import "./CategoryMenu.scss"
import CategoryItem from "../CategoryItem/CategoryItem"

const CategoryMenu = (props) => {
    const categories = props.categories
    return (
        <div className="categories-container">
        {
      categories.map((category) =>(
        <CategoryItem key={category.id} category={category} />
      ))
        }
        </div>
    )
}

export default CategoryMenu
