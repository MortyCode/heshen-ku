import React from 'react';
import { Layout ,Menu,Typography,Divider, Switch} from 'antd';

import 'antd/dist/antd.css';
import SidePage from './SidePage';
import ContextPage from './ContextPage';
import BlogPage from './BlogPage';
import BlogIndex from './BlogIndex';
import HomePage from './HomePage';

import { FileTextOutlined, FieldTimeOutlined, HomeOutlined } from '@ant-design/icons';


const { Header, Sider,Footer, Content } = Layout;
const { SubMenu } = Menu;
const { Title,Text } = Typography;


export default class Home extends React.Component {

    state = {
        currentPage: 'home',
    };

    constructor(props){
        super(props);
    }

    handleDelete = (id)=> {
        const { dispatch } = this.props;
        dispatch({
          type: 'products/delete',
          payload: id,
        });
    }

    selectMenu =(e)=>{
        this.setState({ currentPage: e.key });
    }

    render() {
        const { currentPage } = this.state;
        return (
            <Layout>
                <Sider style={{backgroundColor:"#fff" ,textAlign:"center",paddingLeft:'30px'}} >
                    <Title level={2} style={{lineHeight:2.2}} >26°C</Title>
                    <SidePage></SidePage>
                </Sider>
                
                <Layout style={{backgroundColor:"#f3f99d",display:'flex'}}> 

                    <Header style={{backgroundColor:"#fff",display:'flex' }} >

                        <Menu onClick={this.selectMenu} selectedKeys={[currentPage]} mode="horizontal">
                            <Menu.Item key="home" icon={<HomeOutlined />}>
                                首页
                            </Menu.Item>
                            <Menu.Item key="blog" icon={<FileTextOutlined />}>
                                文章
                            </Menu.Item>
                            <Menu.Item key="index" icon={<FieldTimeOutlined />}>
                                目录
                            </Menu.Item>

                        </Menu>

                    </Header>

                    <Content  style={{backgroundColor:"#fff",padding:'20px',minHeight: "600px"}}>
                        {currentPage=="home"?<HomePage/>:null}
                        {currentPage=="blog"?<ContextPage/>:null}
                        {currentPage=="index"?<BlogIndex/>:null}
                    </Content>

                    <Layout > 
                    <Footer  style={{backgroundColor:"#fff",padding:'20px'}}>
                            <Divider />
                            <div style = {{textAlign:"center"}}>
                                河神❤️
                            </div>
                    </Footer>
                </Layout>
                </Layout>


            </Layout>
      );        
    }

}

