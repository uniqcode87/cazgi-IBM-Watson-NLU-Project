import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      //Returns the emotions as an HTML table
      return (  
        <div>
          <table className="table table-bordered">
            <thead>
                <th>Emotion</th>
                <th>Confidence</th>
            </thead>
            <tbody>
            {
              Object.entries(this.props.emotions).map(function(mapentry) {
                    if (mapentry[0] !== "success") {
                        return (
                                <tr>
                                <td>{mapentry[0]}</td>
                                <td>{mapentry[1]}</td>
                                </tr>
                        );
                    }
                    return "";
                })
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;