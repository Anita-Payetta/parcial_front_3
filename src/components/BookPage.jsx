import React from "react";
import History from "./History";
import Options from "./Options";

class BookPage extends React.Component {
    
    render() {
        const showOptions= !this.props.optionAText.includes("FIN");
        return (
            <div className="layout">
                <p className="adventure">
                    {this.props.historia}
                </p>
                {showOptions && (<Options 
                    onSelectedOption={this.props.onSelectedOption}
                    optionAText={this.props.optionAText}
                    optionBText={this.props.optionBText}
                />)}
                <History 
                    selectedOptions={this.props.selectedOptions}
                    />
            </div>
        );
    }
}

export default BookPage;