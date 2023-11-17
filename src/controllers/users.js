import {pool} from "../database/database.js";

export const getTest = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM TEST");
        res.json(rows);
    } catch (error) {
        return res.status(500).json({message: "Something goes wrong"});
    }
};

export const postTest = async (req, res) => {
    try {
        const {name} = req.body;
        const [rows] = await pool.query("INSERT INTO test(name) VALUES(?)", [
            name,
        ]);
        res.send({rows});
    } catch (error) {
        return res.status(500).json({message: "Something goes wrong"});
    }
};

export const getTestId = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM test WHERE id=?", [
            req.params.id,
        ]);
        if (rows.length <= 0)
            return res.status(404).json({message: "NOT FOUND"});
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({message: "Something goes wrong"});
    }
};

export const deleteTest = async (req, res) => {
    try {
        const result = await pool.query("DELETE FROM test WHERE id=", [
            req.params.id,
        ]);
        if (result.affectedRows <= 0)
            return res.status(404).json({message: "NOT FOUND"});
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: "Something goes wrong"});
    }
};

export const updateTest = async (req, res) => {
    try {
        const {id} = req.params;
        const {name} = req.body;
        const result = await pool.query(
            "UPDATE test SET name = ? WHERE id = ?",
            [name, id]
        );
        if (result.affectedRows <= 0)
            return res.status(404).json({message: "NOT FOUND"});
        const [rows] = await pool.query("SELECT * FROM test WHERE id=?", [id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({message: "Something goes wrong"});
    }
};

export const updateTest2 = async (req, res) => {
    //ifnull ahi manda lo que ya esta
    try {
        const {id} = req.params;
        const {name} = req.body;
        const result = await pool.query("UPDATE test SET name = IFNULL(?, name) WHERE id = ?",[name, id]);
        if (result.affectedRows <= 0)
            return res.status(404).json({message: "NOT FOUND"});
        const [rows] = await pool.query("SELECT * FROM test WHERE id=?", [id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({message: "Something goes wrong"});
    }
};
