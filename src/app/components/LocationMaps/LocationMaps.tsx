const mapData = {
    iframeSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12478.81877977629!2d77.07283917224369!3d28.637250996905415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05db544a90db%3A0x93af5f566d962ded!2sGlobal%20IT%20Success!5e0!3m2!1sen!2sin!4v1770286520444!5m2!1sen!2sin',
}

//  width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


export default function LocationMap() {
    return (
        <section className="location-map-wrapper">
            <div className="container mx-auto">
                <div className="location-map__frame">
                    <iframe
                        src={mapData.iframeSrc}
                        loading="lazy"
                        width={600}
                        height={400}
                        //  style="border:0;"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Global IT Success Location"
                    />
                </div>
            </div>
        </section>
    )
}
