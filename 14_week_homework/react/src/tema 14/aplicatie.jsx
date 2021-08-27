import React from 'react';
import ReactDOM from 'react-dom';


class ProductCategoryRow extends React.Component {

    render() {
        const category = this.props.category;
        return (
            <tr>
                <th>
                    {category}
                </th>
            </tr>
        )
    }
}

class ProductRow extends React.Component {
    render() {
        const product = this.props.product
        const name = product.stocked ? <span style={{ color: 'green' }}>{product.name}</span> : <span style={{ color: 'red' }}>{product.name}</span>
        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        )
    }
}

class ProductTable extends React.Component {
    render() {

        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        const rows = [];
        let lastCategory = null;

        this.props.produse.forEach((product) => {
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                        category={product.category}
                        key={product.category} />
                )
            }
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name} />
            )
            lastCategory = product.category;
        })
        return (
            <table>
                <thead>
                    <tr>
                        <th>
                            Denumire
                        </th>
                        <th>
                            Pret
                        </th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
    }
    render() {

        return (
            <form>
                <input type="text" placeholder="Cauta Produs" 
                value={this.props.filterText}
                onChange={this.handleFilterTextChange}/>

                <p>
                    <input type="checkbox"
                    checked={this.props.inStockOnly}
                    onChange={this.handleInStockChange} />
                    {' '} Arata doar produsele in stoc</p>
            </form>
        )
    }
}

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };


        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
      }
    
      handleFilterTextChange(filterText) {
        this.setState({
          filterText: filterText
        });
      }
      
      handleInStockChange(inStockOnly) {
        this.setState({
          inStockOnly: inStockOnly
        })
      }
    

    render() {
        return (
            <div className='FilterableProductTable' id='FilterableProductTable'>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onInStockChange={this.handleInStockChange}
                />
                <ProductTable
                    produse={this.props.produse}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />

            </div>
        )
    }
}

function App() {
    return (
        <div>
            <h1>Bine ai venit la Piata Online!</h1>
            <FilterableProductTable produse={PRODUSE} />
        </div>
    )
}



const PRODUSE = [
    { category: 'FRUCTE', price: '5 RON', stocked: true, name: 'Mar' },
    { category: 'FRUCTE', price: '15 RON', stocked: true, name: 'Afine' },
    { category: 'LEGUME', price: '3 RON', stocked: true, name: 'Morcov' },
    { category: 'LEGUME', price: '13,5 RON', stocked: false, name: 'Ananas' },
]


ReactDOM.render(
    <App />,
    document.getElementById('root')
)


