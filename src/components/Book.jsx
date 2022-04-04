import React from "react";
import BookPage from "./BookPage";


class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            counter: 1,
            currentId: "1",
            selectedOptions:[],
        }
        this.handleSelectedOption= this.handleSelectedOption.bind(this);
    } 
    
    handleSelectedOption(option){
        const internalCounter= this.state.counter + 1;
        this.setState({
            counter: internalCounter,
            currentId: internalCounter + option,
            selectedOptions: this.state.selectedOptions.concat(option.toUpperCase()),
        });
        
    }
    render(){
        const currentPage= this.props.data.find((page)=>page.id === this.state.currentId);
        return (
            <BookPage 
                historia={currentPage.historia}
                onSelectedOption={this.handleSelectedOption}
                optionAText={currentPage.opciones.a}
                optionBText={currentPage.opciones.b}
                selectedOptions={this.state.selectedOptions} 
            />
        );
    }
}

export default Book;