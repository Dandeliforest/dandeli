import Card from "react-bootstrap/Card";

function Galery() {
  const galery = [
    { source: "images/firecamp.jpg" },
    { source: "images/garden.jpg" },
    { source: "images/food.jpg" },
    { source: "images/outlook.jpg" },
    { source: "images/room.jpg" },
    { source: "images/toilet.jpg" },
  ];
  return (
    <div className="container mt-5 py-4" id="gallery">
      <h2 className="text-center py-4">Photo Galery</h2>
      <div className="row row-cols-md-3 mx-0 ">
        {galery.map((data) => (
          <div className="px-3 my-3">
            <Card className="px-0">
              <Card.Img
                variant="top"
                src={data.source}
                style={{ width: "100%", height: 300, objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title style={{ fontFamily: "Flama", fontWeight: 500 }}>
                  Dandeli Forest Escapes
                </Card.Title>
                <Card.Text>
                  <p>
                    We’re happy to provide our guests with a full range of
                    services to meet their specific needs.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galery;
