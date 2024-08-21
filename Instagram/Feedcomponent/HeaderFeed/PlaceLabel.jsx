const PlaceLabel = (props) => {
  return (
    <div className="text-xs text-slate-600">
      <span>
        {props.place} {props.nation}
      </span>
    </div>
  );
};

export default PlaceLabel;
