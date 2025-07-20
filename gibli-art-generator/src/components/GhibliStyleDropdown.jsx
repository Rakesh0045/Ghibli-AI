const GhibliStyleDropdown = ({ value, onChange }) => (
    <div>
        <label htmlFor="ghibli-style" className="text-md font-semibold mb-2 block">Ghibli Style</label>
        <select
            id="ghibli-style"
            value={value}
            onChange={onChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-orange-800 focus:border-transparent transition">
            <option value="analog-film">Analog Film</option>
            <option value="anime">Anime</option>
            <option value="cinematic">Cinematic</option>
            <option value="comic-book">Comic Book</option>
            <option value="digital-art">Digital Art</option>
        </select>
    </div>
);

export default GhibliStyleDropdown;