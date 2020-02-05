import React from 'react';
import '../Styles/EditPopup.css';
import { IoIosClose } from 'react-icons/io';
import { FiCheck } from 'react-icons/fi';
import { IoIosAdd } from 'react-icons/io'
import { IoMdTrash } from 'react-icons/io'
// import { postDay } from '../Axios/axios_getter';

const EditModule = ({ color, mood, date, username, close}) => {
    let moodToNum = {
        "Great": 4, 
        "Good": 3, 
        "Normal": 2,
        "Off": 1,
        "Bad": 0,
    }

    async function editDay(e) {
        // await postDay(date, moodToNum[mood], "karenying", [], []);
        close();
    }
    
    return (
        <div 
            className="edit-module"
            onClick={ editDay }
        >
            <div className="edit-module-colorbox-container">
                <div 
                    className="edit-module-colorbox"
                    style={{ backgroundColor: color }}>
                        <FiCheck color='white'/>
                </div>
            </div>
            <div className="edit-module-text">
                <p>{ mood } day</p>
            </div>
        </div>
    )
}

class EditPopup extends React.Component {

    render() {

        return (
            <>
                <div className="edit-container">
                    <div className="edit-close-container" style={{ textAlign: 'right' }}>
                        <div className="edit-close" style={{ paddingTop: '8px', paddingRight: '8px' }}>
                            <IoIosClose 
                                size='30px' 
                                color='#5f6368' 
                                style={{
                                    paddingBottom: '0px', 
                                    borderRadius: '50%',
                                    cursor: 'pointer',
                                }}
                                onClick={ this.props.closePopup }
                            /> 
                        </div>
                    </div>
                    <div className="edit-content">
                        <div className="edit-header">
                            <h3>EDIT RATING</h3>
                        </div>
                            <hr style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '20px', marginRight: '20px' }}/>
                        <EditModule color="#5171FF" mood="Great" date={ this.props.date } close={ this.props.closePopup }/>
                        <EditModule color="#8C52FF" mood="Good" date={ this.props.date } close={ this.props.closePopup }/>
                        <EditModule color="#CB6BE7" mood="Normal" date={ this.props.date } close={ this.props.closePopup }/>
                        <EditModule color="#FF66C5" mood="Off" date={ this.props.date } close={ this.props.closePopup }/>
                        <EditModule color="#FF5757" mood="Bad" date={ this.props.date } close={ this.props.closePopup }/>
                        <hr style={{ marginTop: '0px', marginBottom: '0px', marginLeft: '20px', marginRight: '20px' }}/>
                        <div className="edit-notes">
                            <p><IoIosAdd size='20px'/> ADD NOTES</p>
                        </div>
                        <hr style={{ marginTop: '0px', marginBottom: '0px', marginLeft: '20px', marginRight: '20px' }}/>
                        <div className="edit-trash">
                            <p><IoMdTrash size='20px'/>DELETE MOOD</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default EditPopup;