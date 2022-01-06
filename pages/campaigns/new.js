import React, { Component } from "react";
import Layout from "../../components/Layout";
import 'semantic-ui-css/semantic.min.css';
import factory from "../../ethereum/factory"
import web3 from "../../ethereum/web3";
import { Message, Button } from "semantic-ui-react";
import { Router } from "../../routes";

class CampaignNew extends Component {
    state = {
        minimumContribution: "",
        errorMessage: "",
        loading: false
    };

    onSubmit = async (event) => {
        event.preventDefault();

        this.setState({ loading: true })
        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods.createCampaign(this.state.minimumContribution).send({
                from: accounts[0]
            });
            Router.pushRoute("/");
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }
        this.setState({ loading: false })
    };
    render() {
        return (
            <Layout>
                <h3>Create Campaign</h3>

                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="field">
                        <label>Minimum Contribution</label>
                        <div className="ui right labeled input">
                            <input type="text" value={this.state.minimumContribution}
                                onChange={event =>
                                    this.setState({ minimumContribution: event.target.value })} />
                            <div className="ui label">
                                <div className="text">wei</div>
                            </div>
                        </div>
                    </div>

                    <div style={{ color: "red" }} >
                        <div>
                            {this.state.errorMessage}
                        </div>
                    </div>

                    <Button loading={this.state.loading} primary type="submit">Create</Button>
                </form>
            </Layout >
        );
    }
}

export default CampaignNew;