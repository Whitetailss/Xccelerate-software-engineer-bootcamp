import React from 'react';
import { connect } from 'react-redux'
import '../../assets/css/cms/cmsDetails.css';

class PureDisplay extends React.Component{
constructor(props){
    super(props)

    this.renderInput = this.renderInput.bind(this);
}
  
renderInput(mixInput, index){
    return(
       
        <div className='teacherCard' key={index}>
        <div className='flexRow'>
        <div><img className='teacherImg' src={mixInput.imgUrl} alt='caption'/></div>
        <div className='textBox'>{mixInput.caption}</div>
       </div>
        
        </div>
       
    )
}


    render(){
        
      let displayRow = this.props.teacherInputArr.map((mixInput, index) => this.renderInput(mixInput, index))
        
    
                  
        return(
            <div>
                <div className='scrollWrapper'>
                {displayRow}
                </div>
            </div>
        )
    }

}


class PureDisplayTwo extends React.Component{
    constructor(props){
        super(props)
    
        this.renderInput = this.renderInput.bind(this);
    }
      
    renderInput(mixInput, index){
        return(
           
            <div className='facilityCard' key={index}>
            <div>
            <img className='facilityImg' src={mixInput.imgUrl} alt='caption'/>
            </div>
            <div id='facility_overlays'>{mixInput.caption}</div>
            </div>
           
        )
    }
    
    
        render(){
            
          let displayRow = this.props.facilityInputArr.map((mixInput, index) => this.renderInput(mixInput, index))
            
        
                      
            return(
                <div className='scrollWrapper'>
                    
                    {displayRow}
                    
                </div>
            )
        }
    
    }
const mapStateToProps = (state) =>{
    return {
    teacherInputArr: state.cmsDetail.teacher,
    facilityInputArr: state.cmsDetail.facility
    }
    
}

export const TeacherInfoDisplay = connect(mapStateToProps)(PureDisplay)
export const FacilityInfoDisplay = connect(mapStateToProps)(PureDisplayTwo)