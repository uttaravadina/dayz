import React from 'react';
import '../Styles/EditPopup.css';
import { IoIosClose } from 'react-icons/io';
import { FiCheck } from 'react-icons/fi';
import { IoIosAdd } from 'react-icons/io'
import { FaTrashAlt } from 'react-icons/fa'
// import { postDay } from '../Axios/axios_getter';

const EditModule = ({ color, mood, date, username, closePopup, moodSelected}) => {
    let moodToNum = {
        "Great": 4, 
        "Good": 3, 
        "Normal": 2,
        "Off": 1,
        "Bad": 0,
    }

    // WRITE THIS FUNCTION
    async function editDay(e) {
        // await postDay(date, moodToNum[mood], "karenying", [], []);
        closePopup();
    }

    let isSelected = moodSelected === moodToNum[mood];
    
    return (
        <div 
            className="edit-module"
            onClick={ editDay }
        >
            <div className="edit-module-colorbox-container">
                <div 
                    className="edit-module-colorbox"
                    style={{ backgroundColor: color }}>
                        { isSelected ? (<FiCheck color='white' size='25px'/>) : null }
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
        const { moodSelected, date, closePopup } = this.props;

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
                        <EditModule 
                            color="#5171FF" 
                            mood="Great" 
                            date={ date } 
                            closePopup={ closePopup }
                            moodSelected={ moodSelected }
                        />
                        <EditModule 
                            color="#8C52FF" 
                            mood="Good" 
                            date={ date } 
                            closePopup={ closePopup }
                            moodSelected={ moodSelected }
                        />
                        <EditModule 
                            color="#CB6BE7" 
                            mood="Normal" 
                            date={ date } 
                            closePopup={ closePopup }
                            moodSelected={ moodSelected }
                        />
                        <EditModule 
                            color="#FF66C5" 
                            mood="Off" 
                            date={ date } 
                            closePopup={ closePopup }
                            moodSelected={ moodSelected }
                        />
                        <EditModule 
                            color="#FF5757" 
                            mood="Bad" 
                            date={ date } 
                            closePopup={ closePopup }
                            moodSelected={ moodSelected }
                        />
                        <hr style={{ marginTop: '5px', marginBottom: '0px', marginLeft: '20px', marginRight: '20px' }}/>
                        <div className="edit-notes">
                            <p><IoIosAdd size='20px'/>EDIT NOTES</p>
                        </div>
                        <hr style={{ marginTop: '0px', marginBottom: '0px', marginLeft: '20px', marginRight: '20px' }}/>
                        <div className="edit-trash">
                            <p><FaTrashAlt size='13px' style={{ marginRight: '7px'}}/>DELETE RATING</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default EditPopup;