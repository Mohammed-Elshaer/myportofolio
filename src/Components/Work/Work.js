import React, {Component} from 'react';
import axios  from 'axios';
import  {WorkSection,WorkPart,PartTitle,WorkTitle,Span,Line,Partdesc,Icon}from'./Workstyle.js';

class Work extends Component{

    state = {
        works :[

        ]
    }

    componentDidMount(){
        axios.get('js/data.json').then( res => {this.setState({works: res.data.works})})
    }
    render(){
const {works} = this.state;
const workList = works.map((workitem) => {
    return(
        <WorkPart first ={workitem.id} key={workitem.id}>
        <Icon className={workitem.icon_name}></Icon>
        <PartTitle>{workitem.title}</PartTitle>
        <Line />
        <Partdesc>
        {workitem.body}
        </Partdesc>
    </WorkPart>
    )
})
        return (
            <WorkSection>
            <div className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                {workList}
            </div>
        </WorkSection>
        );

    }


    
}

export default Work;