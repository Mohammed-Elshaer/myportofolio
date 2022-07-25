import React , {useState , useEffect}  from 'react';

import {SocialMedia, Social,Icon,SocialDesc,Span,SpanInfo} from'./Socialmediastyle.js';
 import axios from 'axios'

function Socialmedia(props) {

    const [ social , setSocial ] = useState([])

    useEffect ( () => {
        axios.get('js/data.json').then( res => { setSocial(res.data.social) } )
    } , [] )

    const socialIcon = social.map( (socialItem) =>{
        return(
<Social item={socialItem.id} key={socialItem.id}>
            <Icon className={socialItem.icon}></Icon>
            <SocialDesc>
                <Span>{socialItem.title}</Span>
                <SpanInfo>{socialItem.body}</SpanInfo>
            </SocialDesc>
        </Social>
        )

    })

    return (
        <SocialMedia>
        
       {socialIcon}
       
    </SocialMedia>
    
    );
}

export default Socialmedia;