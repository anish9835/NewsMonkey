import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let { title, description, urlToImage, newsUrl, author, date } = this.props;
        return (
            <div className="card my-3" style={{ width: "18 rem" }}>
                <img src={urlToImage} style={{ height: "200px", width: "18 rem" }} className="card-img-top" alt="..." />
                <div className="card-body" style={{ height: "10 rem" }}>
                    <h5 className="card-title text-truncate">{title == null ? "Title is not Availbale lorem " : title}</h5>
                    <p className="card-text text-truncate">{description == null ? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus amet temp" : description} </p>
                    <p className="card-text text-truncate"><small className="text-muted">by {author} on {date}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more...</a>
                </div>
            </div>
        )
    }
}

export default NewsItems


//API KEY: 20f792944af4438495df9ca9531c6742