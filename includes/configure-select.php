<div id="configure-machine" class="configure">
    <label class="configure-label">Choose machine to configure</label>
    <select id="machine" name="machine" required="required">
        <option value="NaN"><?php writeTextContent('Choose machine to configure','Please select...'); ?></option>
        <optgroup label="Monocoque Trailers">
            <option value="4">QM/6</option>
            <option value="6">QM/8</option>
            <option value="38">QM/11</option>
            <option value="39">QM/12</option>
            <option value="48">QM/1200</option>
            <option value="40">QM/14</option>
            <option value="49">QM/1400</option>
            <option value="41">QM/16</option>
            <option value="50">QM/1600</option>
        </optgroup>
        <optgroup label="Drop-Side Trailers">
            <option value="42">S/2</option>
            <option value="43">S/4</option>
            <option value="44">S/5</option>
            <option value="45">S/6</option>
            <option value="46">S/85</option>
            <option value="47">S/10</option>
        </optgroup>
        <optgroup label="Flat / Bale Trailers">
            <option value="32">BC/18</option>
            <option value="33">BC/21</option>
            <option value="34">BC/25-10ton</option>
            <option value="35">BC/25-12ton</option>
            <option value="36">BC/28</option>
            <option value="37">BC/32</option>
        </optgroup>
        <optgroup label="Dumper Trailers">
            <option value="27">QMD/6</option>
            <option value="28">QMD/8</option>
            <option value="119">QMD/10</option>
            <option value="30">QMD/12H</option>
            <option value="31">QMD/14H</option>
        </optgroup>
        <optgroup label="Feed Trailers">
            <option value="7">FT/15</option>
            <option value="8">FT/20</option>
        </optgroup>
        <optgroup label="Livestock Trailers / Containers">
            <option value="9">21</option>
            <option value="10">25</option>
            <option value="11">28</option>
            <option value="108">32</option>
        </optgroup>
        <optgroup label="Muck Spreaders">
            <option value="12">MS45</option>
            <option value="13">MS60</option>
            <option value="14">MS75</option>
            <option value="15">MS90</option>
            <option value="16">MS105</option>
        </optgroup>
        <optgroup label="Rear Discharge Muck Spreaders">
            <option value="17">VES1500</option>
            <option value="18">VES2000</option>
            <option value="19">VES2500</option>
        </optgroup>
        <optgroup label="Tankers">
            <option value="20">ST1200</option>
            <option value="21">ST1400</option>
            <option value="22">ST1600</option>
            <option value="23">ST1800</option>
            <option value="24">ST2000</option>
            <option value="25">ST2300</option>
            <option value="26">ST2550</option>
        </optgroup>
        <optgroup label="Feed Barriers">
            <option value="118">FB/6</option>
        </optgroup>
    </select>
</div>