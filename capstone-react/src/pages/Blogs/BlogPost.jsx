import { useParams } from "react-router-dom";

export default function BlogPost(props) {
    const { blogId } = useParams();
    const blogs = props.props;
    const blog = blogs.filter(blog => blog.id == blogId);

    console.log(blog);

    let textSnippet = blog[0].text;
    let title1 = textSnippet.split("<start1>")[1].split("<end1>")[0];
    let paragraph1 = textSnippet.split("<start2>")[1].split("<end2>")[0];
    let title2 = textSnippet.split("<start3>")[1].split("<end3>")[0];
    let paragraph2 = textSnippet.split("<start4>")[1].split("<end4>")[0];

    return(
        <div className="row my-5">
            <div className="col-2"></div>
            <div className="col-8">
                <div className='row'>
                    <h2>{title1}</h2>
                    <p className='card-text'>{paragraph1}</p>
                </div>
                <br></br>
                <div className="row">
                    <h2>{title2}</h2>
                    <p className='card-text'>{paragraph2}</p>
                </div>
            </div>
            <div className="col-2"></div>
        </div>
    )
}