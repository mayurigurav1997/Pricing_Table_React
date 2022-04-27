import React from 'react'
import Button from './Button'
export default function Card(props) {
    return (
        <div className="col-lg-4" key={props.id}>
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{props.title}</h5>
                    <h6 className="card-price text-center">{props.price}<span className="period">/month</span></h6>
                    <hr />
                    <ul className="fa-ul">
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.users}</li>
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.storage}</li>
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.public_projects}</li>
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.access}</li>
                        {props.title === "Free" ? (<li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.private_projects}</li>) :
                            (<li> <span className="fa-li"><i className="fa fa-check"></i></span>{props.private_projects}</li>)}
                        {props.title === "Free" ? (<li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.phone_support}</li>) :
                            (<li> <span className="fa-li"><i className="fa fa-check"></i></span>{props.phone_support}</li>)}
                        {props.title === "Free" ? (<li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.subdomain}</li>) :
                            (<li> <span className="fa-li"><i className="fa fa-check"></i></span>{props.subdomain}</li>)}
                        {props.title === "Pro" ? (<li> <span className="fa-li"><i className="fa fa-check"></i></span>{props.status_report}</li>) :
                            (<li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>{props.status_report}</li>)}
                    </ul>
                    <Button />
                </div>
            </div>
        </div>


    );
}
