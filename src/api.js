import { React, Component } from 'react';

const pokeApi = async (id) => {
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        method: 'GET',
    })

    return request.json();
}


class PokeList extends Component {
    constructor(props) {
        super(props);
        this.state = { list: [] };
    }

    update(i, e) {
        e.preventDefault();

        this.setState(prevState => ({
            list: [...prevState.list.map((value, index) => (index === i ? e.target.value : value))]
        }))
    }

    add = async () => {
        let result;
        try {
            let r = await pokeApi(this.state.list.length + 1);
            if (r["name"] == null) {
                result = "Pokemon";
            } else {
                result = r["name"];
            }
        } catch (error) {
            result = "Pokemon";
        }

        this.setState(prevState => ({
            list: [...prevState.list, result]
        }))
    }

    remove = index => {
        this.setState(prevState => ({
            list: [...prevState.list.filter((_item, id) => id !== index)]
        }))
    }

    submit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    {this.state.list.map((item, index) => (
                        <div className="item" key={index}>
                            <input type="text" className="input" id={index} value={item} onChange={(e) => this.update(index, e)} />
                            <button className="remove" onClick={() => this.remove(index)}>Remove</button>
                            <br></br>
                        </div>
                    ))}
                    <button className="add" type="submit" onClick={this.add}>Add Pokemon</button>
                </form>
            </div>
        );
    }
}


export { pokeApi, PokeList };