import React from "react";

class History extends React.Component{
    render() {
        const selectedOptions= this.props.selectedOptions;
        const historyOptions= [].concat(selectedOptions);
        const prevChoice= historyOptions.pop();
        return prevChoice && (
            <div className="adventureHistory">
                <div>Selección Anterior: {prevChoice}</div>
                {historyOptions.length >0 && (<div>
                    <span>Historial de opciones elegidas: </span>
                    <ul>
                        {historyOptions.map(option =>
                            <li>{option}</li>
                        )}
                    </ul>
                </div>)}
            </div>
        );
    }
}

export default History;