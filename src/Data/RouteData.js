
import NewCenter from "../page-components/NewCenter";
import ManageFeedback from "../page-components/ManageFeedback";
import ManageParents from "../page-components/ManageParents";
import ManageRatings from "../page-components/ManageRatings";
import ManageCenters from "../page-components/ManageCenters";

export const routes= [
{
    path:"/manage-centers",
    exact:"true",
    sidebar : () => <div>!</div>,
    main : () => <ManageCenters></ManageCenters>
},
{
    path:"/manage-parents",
    exact:"true",
    sidebar : () => <div>!</div>,
    main : () => <ManageParents></ManageParents>
},
{
    path:"/manage-feedback",
    exact:"true",
    sidebar : () => <div>!</div>,
    main : () => <ManageFeedback></ManageFeedback>
},
{
    path:"/manage-ratings",
    exact:"true",
    sidebar : () => <div>!</div>,
    main : () => <ManageRatings></ManageRatings>

},
{
    path:"/new-center",
    exact:"true",
    sidebar : () => <div>!</div>,
    main : () => <NewCenter></NewCenter>

}
];