import React from 'react'
import TicketButton from '../components/TicketButton'

type ShowCardProps = {
    image: string,
    title: string,
    byline: string,
    location: string | string[],
    performanceDate: string | string[],
    ticketURL?: string
}

class ShowCard extends React.Component<ShowCardProps> {

    getList(locations:string|string[], className:string){

        if(typeof locations === 'string'){
            return <p className={className}>{locations}</p>;
        }
        else{
            return locations.map(location => {
                return <p className={className}>{location}</p>;
            })

        }
        
    }

    render() {
        return (
            <div className="event-item row my-5 py-0" id="1776">

                <div className="col-md-5 ml-0 pl-0 py-0 my-0 ">
                    <img className=" my-0 py-0 img-fluid" src={this.props.image} alt={this.props.title} />
                </div>
                <div className="col-md-7 py-2">
                    <h2 className="mt-0 pt-2">{this.props.title}</h2>
                    <p className="byline">{this.props.byline}</p>
                    {this.getList(this.props.location, 'location')}
                    {this.getList(this.props.performanceDate, 'performance-date')}

                    {this.props.children}

                    {this.props.ticketURL? <TicketButton
                        ticketURL= {this.props.ticketURL}
                        text='Buy Tickets'
                    /> : ''}

                </div>
            </div>
        )
    }

}
export default ShowCard;