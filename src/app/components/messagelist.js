import PropTypes from "prop-types"
import {connect} from 'react-redux'
import React, {useState} from "react";
import InfiniteScroll from 'react-infinite-scroll-component';

const Messagelist = (props) => {
    const [shownlength, handleShownLendth] = useState(25)
    const fetchMoreData = () => (
        handleShownLendth(previousState => {
            console.log(previousState)
            return previousState + 25
        })
    );
    return (<div className={"messagelist"}>

        <div
            id="scrollableDiv"
            style={{
                height: 350,
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column-reverse',
            }}
        >
            {/*Put the scroll bar always on the bottom*/}
            <InfiniteScroll
                dataLength={props.messages.reverse().slice(0,  shownlength)}
                next={fetchMoreData}
                style={{
                    display: 'flex',
                    flexDirection: 'column-reverse'
                }}
                inverse={true} //
                hasMore={shownlength < props.messages.length}
                loader={<h4>Loading...</h4>}
                scrollableTarget="scrollableDiv"
                pullDownToRefreshThreshold={50}
                height={350}
            >
                {props.messages.sort((a,b)=>(a.msgTime > b.msgTime ?-1:a.msgTime <b.msgTime?1:0)).slice(0,  shownlength).map((message, index) => (
                    <div key={index}>
                        {
                            message.authorName.localeCompare(props.username)===0?
                                (<><img src={"/me.png"} className={"avatar"} alt={"me"}/>
                                <span className={"mymsg"}>{message.content}</span> </>):(
                                    <> <span className={"othermsg"}>{message.content}</span> <img src={"/other.png"} className={"avatar"} alt={message.authorName}/></>)
                        }
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    </div>)
}

Messagelist.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            content: PropTypes.string.isRequired,
            authorName: PropTypes.string.isRequired,
            msgTime: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}

export default connect(state => ({
    messages: state.messages
}), {})(Messagelist)

