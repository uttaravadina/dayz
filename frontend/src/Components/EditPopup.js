import React from 'react';
import '../Styles/EditPopup.css';
import { IoIosClose } from 'react-icons/io';
import { FiCheck } from 'react-icons/fi';
import { FaTrashAlt } from 'react-icons/fa';
import { GoPencil } from 'react-icons/go';
// import { deleteRating } from '../Axios/axios_getter';
import { editRating, deleteRating } from '../Axios/axios_getter';
import { MOOD_TO_NUM, WEEKDAYS } from '../constants';

const EditModule = ({ color, mood, date, close, moodSelected, updateMap }) => {

    async function editDay(e) {
        updateMap(date, MOOD_TO_NUM[mood]);
        await editRating(date, MOOD_TO_NUM[mood]);
        close(); 
    }

    let isSelected = moodSelected === MOOD_TO_NUM[mood];
    
    return (
        <div 
            className="edit-module"
            onClick={ editDay }
        >
            <div className="edit-module-colorbox-container">
                <div className="edit-module-colorbox" style={{ backgroundColor: color }}>
                    { isSelected ? (<FiCheck color='white' size='20px'/>) : null }
                </div>
            </div>
            <div className="edit-module-text">
                <p>{ mood } day</p>
            </div>
        </div>
    )
};

class EditPopup extends React.Component {

    deleteRating = async () => {
        this.props.updateMap(this.props.date, -1);
        await deleteRating(this.props.date);
        this.props.closePopup(); 
    }

    render() {
        const { moodSelected, date, closePopup, updateMap } = this.props;
        let d = new Date(date + 'T00:00');
        let title = WEEKDAYS[d.getDay()] + ', ' + (d.getMonth() + 1)  + '/' + parseInt(d.getDate(), 10);
  
        return (
            <>
                <div className="edit-container">
                    <div className="edit-close-container" style={{ textAlign: 'right' }}>
                        <div 
                            className="edit-close" 
                        > 
                            <h3 style={{paddingLeft: '20px'}}>{title}</h3>
                            <IoIosClose 
                                size='30px' 
                                color='#5f6368' 
                                style={{
                                    paddingBottom: '0px', 
                                    borderRadius: '50%',
                                    cursor: 'pointer',
                                    position: 'absolute',
                                    right: '8px'
                                }}
                                title={ "close" }
                                onClick={ closePopup }
                            /> 
                        </div>
                    </div>
                    <div className="edit-content">
                        {/*
                        <div className="edit-header">
                            <h3>EDIT RATING</h3>
                        </div>
                        <hr style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '20px', marginRight: '20px' }}/>
                        */}
                        <EditModule 
                            color="#5171FF" 
                            mood="Great" 
                            date={ date } 
                            close={ closePopup }
                            moodSelected={ moodSelected }
                            updateMap={updateMap}
                        />
                        <EditModule 
                            color="#8C52FF" 
                            mood="Good" 
                            date={ date } 
                            close={ closePopup }
                            moodSelected={ moodSelected }
                            updateMap={updateMap}
                        />
                        <EditModule 
                            color="#CB6BE7" 
                            mood="Normal" 
                            date={ date } 
                            close={ closePopup }
                            moodSelected={ moodSelected }
                            updateMap={updateMap}
                        />
                        <EditModule 
                            color="#FF66C5" 
                            mood="Off" 
                            date={ date } 
                            close={ closePopup }
                            moodSelected={ moodSelected }
                            updateMap={updateMap}
                        />
                        <EditModule 
                            color="#FF5757" 
                            mood="Bad" 
                            date={ date } 
                            close={ closePopup }
                            moodSelected={ moodSelected }
                            updateMap={updateMap}
                        />
                        <hr style={{ marginTop: '5px', marginBottom: '0px', marginLeft: '20px', marginRight: '20px' }}/>
                        <div className="edit-notes">
                            <p><GoPencil size='15px' style={{ marginRight: '4px', marginBottom: '3px' }} />EDIT NOTES</p>
                        </div>
                        <hr style={{ marginTop: '0px', marginBottom: '0px', marginLeft: '20px', marginRight: '20px' }}/>
                        <div 
                            className="edit-trash"
                            onClick={ this.deleteRating }
                        >
                            <p><FaTrashAlt size='13px' style={{ marginRight: '7px', marginBottom: '3px' }} />DELETE RATING</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default EditPopup;