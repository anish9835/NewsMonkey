import React, { Component } from 'react'
import NewsItem from './NewsItems'
import { Spinner } from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

export default class extends Component {

    static defaultProps = {
        Country: 'in',
        pageSize: 8,
        Category: 'general'
    }
    static propTypes = {
        Country: PropTypes.string,
        pageSize: PropTypes.number,
        Category: PropTypes.string

    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter()} - NewsMonkey`;
    }
    capitalizeFirstLetter() {
        return (this.props.Category.charAt(0).toUpperCase() + this.props.Category.slice(1));
    }

    fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ page: this.state.page + 1 })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        });
    };

    async componentDidMount() {
        this.props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(10);
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(50);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
        this.props.setProgress(100);

    }

    render() {
        return (
            <div className='container text-center'>
                <h1 style={{ marginTop: "4.5rem" }}>NewsMonkey - Top {this.capitalizeFirstLetter() !== 'General' ? this.capitalizeFirstLetter() : ''} Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((e) => {
                                return (<div key={e.url} className="col-md-4 col-sm-6">
                                    <NewsItem title={e.title != null ? e.title.slice(0, 30) : e.title} description={e.description != null ? e.description.slice(0, 80) : e.description} author={e.author != null ? e.author.slice(0, 20) : "Unknown"} date={e.publishedAt != null ? e.publishedAt.slice(0, 10) : e.publishedAt} urlToImage={e.urlToImage != null ? e.urlToImage : "https://media.istockphoto.com/photos/young-woman-reading-the-news-on-a-modern-tablet-computer-while-in-picture-id1177502660?k=20&m=1177502660&s=612x612&w=0&h=ynHK8Q0kyZJ6xaAKBqtFBBzZw5pOkegYx3TLKIxEzKM="} newsUrl={e.url} />
                                </div>)
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}
