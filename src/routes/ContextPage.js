import React from 'react';

import { List, Avatar,Layout } from 'antd';


const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
  ];
  

function clickItem(e){
  this.props.history.push("/BlogPage")
  console.log("clickItemclickItemclickItem");
}

class ContextPage extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
        return (
            <div>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                    
                    <List.Item >
                        <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a onClick={clickItem} >{item.title}</a>}
                        description="博客的前几个字简介"
                        />
                    </List.Item>
    
                    )}
                />
    
            </div>
        );
    }

    
}
export default ContextPage;
