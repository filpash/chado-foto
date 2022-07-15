export interface ICollapse {
  id: number;
  accordionId: string;
  ariaLabelledBy: string;
  collapseId: string;
  dataTargetCollapse: string;
  ariaControlsCollapse: string;
  collapseBtnName: string;
  collapseBody: string;
  images: ImageSize[];
}

export interface ImageSize {
  min: string;
  max: string;
}
