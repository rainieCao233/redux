import React from 'react'
import { Grid, List } from 'antd-mobile';

class AvatorSelector extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    const avatorList = '1,2,3,4,5,6,7,8'.split(",").map(v=>({
      icon:require(`../img/${v}.jpg`),
      text:v
    }));
    const gridHeader = this.state.text
                        ?(<div>
                            <span>已选择头像:{this.state.text}</span>
                          </div>)
                        :(<div>请选择头像</div>)
    return (
      <div>
        <List renderHeader={()=>gridHeader}>
          <Grid data={avatorList} columnNum={4} onClick={
              ele=>{
                this.setState(ele)
                this.props.selectAvator(ele.text)
              }
            } />
        </List>
      </div>
    )
  }
}

export default AvatorSelector