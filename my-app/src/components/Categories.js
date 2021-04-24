import '../styles/Categories.css'

function Categories(props) {
    const { setActiveCategory, categories, activeCategory } = props;
    return(
        <div className='lmj-categories'>
            <h5>Choose a category...</h5>
            <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className='lmj-categories-select'
            >
                <option value=''>---</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <button id='ren' onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>

    )

}

export default Categories