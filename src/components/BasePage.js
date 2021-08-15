import React from 'react';
import { Layout ,Menu,Typography,Divider, Switch} from 'antd';

import 'antd/dist/antd.css';
import SidePage from '../routes/SidePage';

import { FileTextOutlined, FieldTimeOutlined, HomeOutlined } from '@ant-design/icons';


const { Header, Sider,Footer, Content } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;


export default class BasePage extends React.Component {

    state = {
        currentPage: 'HomePage',
    };

    constructor(props){
        super(props);
    }


    selectMenu =(e)=>{
        this.setState({ currentPage: e.key });
        this.props.history.push(`/`+e.key);
    }

    render() {
        const { currentPage } = this.state;
        const { children } = this.props;
        return (
            <Layout>
                <Sider style={{backgroundColor:"#fff" ,textAlign:"center",paddingLeft:'30px'}} >
                    <Title level={2} style={{lineHeight:2.2}} >26°C</Title>
                    <SidePage></SidePage>
                </Sider>
                
                <Layout style={{backgroundColor:"#f3f99d",display:'flex'}}> 
                    <Header style={{backgroundColor:"#fff",display:'flex' }} >

                        <Menu onClick={this.selectMenu} selectedKeys={[currentPage]} mode="horizontal">
                            <Menu.Item key="HomePage" icon={<HomeOutlined />}>
                                首页
                            </Menu.Item>
                            <Menu.Item key="BlogPage" icon={<FileTextOutlined />}>
                                文章
                            </Menu.Item>
                            <Menu.Item key="ContextPage" icon={<FieldTimeOutlined />}>
                                目录
                            </Menu.Item>

                        </Menu>

                    </Header>

                    <Content  style={{backgroundColor:"#fff",padding:'20px',minHeight: "600px"}}>
                        {children}
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

