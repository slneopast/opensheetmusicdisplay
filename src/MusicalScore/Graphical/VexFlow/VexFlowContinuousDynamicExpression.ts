import { GraphicalContinuousDynamicExpression } from "../GraphicalContinuousDynamicExpression";
import { ContinuousDynamicExpression } from "../../VoiceData/Expressions/ContinuousExpressions/ContinuousDynamicExpression";
import { StaffLine } from "../StaffLine";
import { GraphicalLabel } from "../GraphicalLabel";
import { Label } from "../../Label";
import { TextAlignmentEnum } from "../../../Common/Enums/TextAlignment";
import { FontStyles } from "../../../Common/Enums/FontStyles";

/**
 * This class extends the GraphicalContinuousDynamicExpression and implements a drawing method
 * that renders the expressions to the canvas.
 */
export class VexFlowContinuousDynamicExpression extends GraphicalContinuousDynamicExpression {
    constructor(continuousDynamic: ContinuousDynamicExpression, staffLine: StaffLine, textHeight?: number) {
        super(continuousDynamic, staffLine);
        if (this.IsVerbal) {
            this.mLabel = new GraphicalLabel(new Label(continuousDynamic.Label),
                                             textHeight ? textHeight : this.mRules.ContinuousDynamicTextHeight,
                                             TextAlignmentEnum.LeftCenter,
                                             staffLine.PositionAndShape);
            this.mLabel.Label.fontStyle = FontStyles.Italic;
            this.mLabel.setLabelPositionAndShapeBorders();
            this.PositionAndShape.calculateBoundingBox();
        }
    }
}