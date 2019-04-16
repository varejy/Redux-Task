import React ,{Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../styles/App.css';
import { sendMessage } from '../store/action';


class App extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit(message) {

        const { sendMessages } = this.props;

        sendMessages(this.input.value);

        console.log(`${this.input.value} test`);
        this.input.value = '';
        message.preventDefault();
    }

    render(props){
        const { text } = this.props;

        return(
            <div className="App">
                <div className='chat'>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder="Send message"
                            ref={(input) => this.input = input}
                            required
                        />
                        <input className='submit' type='submit' value='Send'/>
                    </form>
                    <div className='showMessage'>
                        <div className='wrappMessage'>
                            <ul>
                                {text.map((item, index) =>
                                    <li key={index}><h3>{item}</h3></li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <h1>Chat</h1>
                </div>
            </div>
        )
    }
}

const mapStateToProts = (state) => {
    return {
        text: state.text
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        sendMessages: bindActionCreators(sendMessage,dispatch),
    }
}

export default connect(mapStateToProts,mapDispatchProps)(App);