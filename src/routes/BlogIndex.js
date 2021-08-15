import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

import BasePage from '../components/BasePage';


function BlogIndex() {

    return (
        <BasePage content="products" history ={this.props.history} >
        <Timeline>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
                Technical testing 2015-09-01
                </Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            </Timeline>
        </BasePage>
    );

}
export default BlogIndex;
