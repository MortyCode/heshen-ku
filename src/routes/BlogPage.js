
// import ReactMarkdown from 'react-markdown'
import {  Box } from 'react-desktop/macOs';
import BasePage from '../components/BasePage';

function BlogPage(props) {

    return (
        <BasePage content="products" history ={props.history} >
            <Box>
                博客详情页面
                {/* <ReactMarkdown>
                    # Hello, *world*!
                </ReactMarkdown> */}
            </Box>
        </BasePage>
    );

}
export default BlogPage;
