import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Button from '../../atoms/Button'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

export const Reserve = ({ statefunction, onAdd, onPost, onFetch, onLogout }) => {
    let sw, tw, usr, pass;
    var name = '';
    const onSubmit = () => {
        console.log('outer scope');
        if(sw != undefined && tw != undefined) {
            console.log('inner scope');
            onAdd(sw.value, tw.value);
            sw.value = '';
            tw.value = '';
        }
    };

    const onPut = () => {
        if(sw != undefined && tw != undefined) {
            onPost(sw.value, tw.value, usr.value, pass.value);
            sw.value = '';
            tw.value = '';
        }
    };

    const onLoad = () => {
        name = usr.value;
        console.log(name);
        onFetch();
    }

    const onExit = () => {
        pass.value = '';
        usr.value = '';
        onLogout();
    }

    return (
        <div>
            ID: <input ref={usrname => {usr = usrname;}}/><br/>
            Pass: <input ref={passwd => {pass = passwd;}}/><br/>
            <Button type="submit" onClick={onLoad}>Login</Button>
            <Button type="submit" onClick={onExit}>Logout</Button><br/><br/>
            Start : <input ref={sinceWhen => {sw = sinceWhen;}} /> <br/>
            End : <input ref={tilWhen => {tw = tilWhen;}} /><br/>
            <Button type="submit" onClick={onSubmit}>Reserve!</Button>
            <Button type="submit" onClick={onPut}>Post Meeting</Button><br/>
        </div>
    )
}

// const Reserve = ({ children, ...props }) => {
//   return (
//     <Wrapper {...props}>
//       {children}
//     </Wrapper>
//   )
// }

Reserve.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default Reserve
